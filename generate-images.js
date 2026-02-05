import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const outputDir = './public/images';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateImage(prompt, filename, size = '1344x768') {
  console.log(`Generating: ${filename}...`);

  try {
    const zai = await ZAI.create();

    const response = await zai.images.generations.create({
      prompt: prompt,
      size: size
    });

    if (!response.data || !response.data[0] || !response.data[0].base64) {
      throw new Error('Invalid response from image generation API');
    }

    const imageBase64 = response.data[0].base64;
    const buffer = Buffer.from(imageBase64, 'base64');

    const outputPath = path.join(outputDir, filename);
    fs.writeFileSync(outputPath, buffer);

    console.log(`✓ Generated: ${filename} (${(buffer.length / 1024).toFixed(2)} KB)`);
    return outputPath;
  } catch (error) {
    console.error(`✗ Failed to generate ${filename}:`, error.message);
    throw error;
  }
}

async function main() {
  console.log('🎨 Generating AQUABLISS website images...\n');

  const images = [
    {
      prompt: 'Professional plumber working on modern bathroom installation, high-end fixtures, luxury renovation, clean and professional photography, warm lighting, premium quality',
      filename: 'hero-plumbing.jpg',
      size: '1440x720'
    },
    {
      prompt: 'Skilled plumber examining pipes in modern home, professional with tools, clean workspace, high-quality workmanship, detailed and realistic, premium service',
      filename: 'plumber-work.jpg',
      size: '1344x768'
    },
    {
      prompt: 'Luxury modern bathroom with premium plumbing fixtures, rain shower, freestanding tub, elegant design, high-end renovation, beautiful lighting, spa-like atmosphere',
      filename: 'bathroom-luxury.jpg',
      size: '1344x768'
    },
    {
      prompt: 'Modern water heater installation in utility room, professional setup, clean and organized, high-efficiency system, premium quality equipment',
      filename: 'water-heater.jpg',
      size: '1024x1024'
    },
    {
      prompt: 'Smart home plumbing control panel, digital interface, leak detection system, modern technology, clean and professional, futuristic design',
      filename: 'smart-plumbing.jpg',
      size: '1344x768'
    },
    {
      prompt: 'Professional emergency plumbing team working, modern equipment, professional uniforms, clean work environment, high-quality service, reliable and trustworthy',
      filename: 'emergency-service.jpg',
      size: '1440x720'
    }
  ];

  const results = [];

  for (const image of images) {
    try {
      const path = await generateImage(image.prompt, image.filename, image.size);
      results.push({ success: true, filename: image.filename, path });
    } catch (error) {
      results.push({ success: false, filename: image.filename, error: error.message });
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('Generation Summary:');
  console.log('='.repeat(60));

  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log(`✓ Successful: ${successful}/${images.length}`);
  console.log(`✗ Failed: ${failed}/${images.length}`);

  if (failed > 0) {
    console.log('\nFailed images:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`  - ${r.filename}: ${r.error}`);
    });
  }

  console.log('\n🎉 Image generation complete!');
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
