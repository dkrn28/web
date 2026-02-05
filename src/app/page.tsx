'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import { motion } from 'framer-motion'
import {
  Droplets,
  Wrench,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Star,
  ArrowRight,
  Zap,
  Home,
  ShowerHead,
  WrenchIcon,
  Gauge,
  Layers
} from 'lucide-react'

export default function AquablissHome() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Emergency Repairs',
      description: '24/7 rapid response for all plumbing emergencies. Our certified technicians arrive within 60 minutes, equipped to handle any crisis.'
    },
    {
      icon: <ShowerHead className="h-8 w-8" />,
      title: 'Bathroom Renovation',
      description: 'Complete bathroom transformations from luxury master suites to efficient guest bathrooms. Premium fixtures and flawless installations.'
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Whole-Home Plumbing',
      description: 'Comprehensive plumbing solutions for new constructions and complete system overhauls. Built to last generations.'
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: 'Water Heater Systems',
      description: 'Expert installation, repair, and maintenance of tankless and traditional water heaters. Energy-efficient solutions.'
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: 'Pipe & Drain Services',
      description: 'Advanced pipe relining, drain cleaning, and leak detection using state-of-the-art technology. Minimal disruption.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Smart Plumbing',
      description: 'Integrated smart home plumbing systems with leak detection, automated shut-offs, and water usage monitoring.'
    }
  ]

  const testimonials = [
    {
      name: 'Alexandra Mitchell',
      location: 'Kiev City Center',
      rating: 5,
      text: 'AQUABLISS transformed our outdated bathroom into a spa-like sanctuary. The attention to detail and professionalism exceeded all expectations. Worth every premium.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      name: 'Marcus Reynolds',
      location: 'Kiev Business District',
      rating: 5,
      text: 'When our restaurant had a major pipe burst at 2 AM, AQUABLISS was there within 45 minutes. They saved us from catastrophic damage. Absolutely indispensable.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      name: 'Elena Petrova',
      location: 'Kiev Residential Area',
      rating: 5,
      text: 'The smart water system they installed has cut our water bills by 40% and given us complete peace of mind. The future of plumbing is here.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    }
  ]

  const faqs = [
    {
      question: 'What makes AQUABLISS different from other plumbing companies?',
      answer: 'We combine Roman concrete-level durability with cutting-edge technology. Every installation is backed by a 25-year warranty, our technicians are certified masters with 15+ years experience, and we use only premium materials from world-class manufacturers. Our response time is unmatched, and our workmanship speaks for itself.'
    },
    {
      question: 'Do you offer emergency services?',
      answer: 'Absolutely. We operate 24/7/365 with guaranteed 60-minute response time for all emergencies. Our fleet is strategically positioned throughout the region, and every technician carries a complete inventory of parts to resolve issues immediately.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We provide transparent, upfront pricing with no hidden fees. After a thorough assessment, we present you with detailed options ranging from essential repairs to premium upgrades. You choose what fits your needs and budget. Emergency calls have a standard service fee, waived if you proceed with the repair.'
    },
    {
      question: 'Do you offer warranties on your work?',
      answer: 'Yes, we offer industry-leading warranties: 25 years on all new installations, 10 years on repairs, and lifetime warranty on all premium fixtures we supply. We stand behind every job with the confidence of spacecraft engineering.'
    },
    {
      question: 'How quickly can you schedule a non-emergency appointment?',
      answer: 'We typically offer same-day service for calls received before 10 AM, and next-day service for all other requests. Our online booking system makes scheduling effortless, and we send confirmation reminders with technician profiles before arrival.'
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: 'Message Sent Successfully',
          description: 'Our team will contact you within 2 hours.',
          variant: 'default',
        })
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please call us directly.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Droplets className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  AQUABLISS
                </h1>
                <p className="text-xs text-slate-500 font-medium tracking-wider">PREMIUM PLUMBING</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-8"
            >
              <a href="#services" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
                Services
              </a>
              <a href="#about" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold shadow-lg">
                Get Quote
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="h-4 w-4" />
                <span>Award-Winning Service Since 1998</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                Where
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent block">
                  Excellence
                </span>
                Flows
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Premium plumbing solutions engineered with Roman concrete reliability. From emergency repairs to luxury installations,
                we deliver perfection that lasts generations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="tel:+380507773399">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold text-lg shadow-xl">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>
                <a href="#contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-slate-300 hover:border-emerald-500 text-slate-700 font-semibold text-lg">
                    Request Service
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-emerald-600">25+</div>
                  <div className="text-sm text-slate-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-emerald-600">50K+</div>
                  <div className="text-sm text-slate-600 font-medium">Projects Completed</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-emerald-600">99.9%</div>
                  <div className="text-sm text-slate-600 font-medium">Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-plumbing.jpg"
                  alt="Premium plumbing work"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Shield className="h-7 w-7 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900">Licensed & Insured</div>
                      <div className="text-sm text-slate-600">Full coverage on all projects</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-2xl font-bold text-emerald-600">24/7</div>
                      <div className="text-xs text-slate-600 font-medium">Emergency Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { icon: <Clock className="h-10 w-10" />, text: '60 Min Response' },
              { icon: <Award className="h-10 w-10" />, text: '25 Year Warranty' },
              { icon: <Shield className="h-10 w-10" />, text: 'Fully Insured' },
              { icon: <Star className="h-10 w-10" />, text: '5-Star Rated' }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-emerald-400 mb-2 flex justify-center">{badge.icon}</div>
                <div className="text-white font-semibold">{badge.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Premium Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive plumbing solutions crafted with aerospace precision and Roman concrete durability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-emerald-600">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-slate-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Built to Last
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {' '}Generations
                </span>
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Since 1998, AQUABLISS has been the gold standard in premium plumbing services. Our approach combines
                traditional craftsmanship with cutting-edge technology, resulting in systems that perform flawlessly
                for decades.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Master-certified technicians with 15+ years experience',
                  'Premium materials from world-class manufacturers',
                  '25-year warranty on all installations',
                  'State-of-the-art diagnostic equipment',
                  'Environmentally responsible practices'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold shadow-lg">
                Learn More About Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/plumber-work.jpg"
                alt="Professional plumber at work"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Expert Team</div>
                    <div className="text-sm text-slate-600">50+ Certified Masters</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Client Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from those who've experienced the AQUABLISS difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-emerald-200"
                      />
                      <div>
                        <div className="font-bold text-slate-900">{testimonial.name}</div>
                        <div className="text-sm text-slate-500">{testimonial.location}</div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about our premium services
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border-2 border-slate-200 px-6 hover:border-emerald-300 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-emerald-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Get In Touch
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Ready to experience plumbing excellence? Contact us now for a free consultation and quote.
                Our team responds within 2 hours during business hours.
              </p>

              <div className="space-y-6 mb-8">
                <a
                  href="tel:+380507773399"
                  className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 font-medium">Call Us</div>
                    <div className="text-xl font-bold text-slate-900">+380 50 777 33 99</div>
                  </div>
                </a>

                <a
                  href="mailto:victordrux1@gmail.com"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 font-medium">Email Us</div>
                    <div className="text-xl font-bold text-slate-900">victordrux1@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 font-medium">Service Area</div>
                    <div className="text-xl font-bold text-slate-900">Kiev & Surrounding Regions</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-8 w-8" />
                  <div>
                    <div className="text-2xl font-bold">24/7 Emergency</div>
                    <div className="text-emerald-100">Always Available</div>
                  </div>
                </div>
                <p className="text-emerald-50 leading-relaxed">
                  Plumbing emergencies don't wait for business hours. Neither do we. Call anytime for immediate assistance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-slate-200 shadow-xl">
                <CardHeader className="bg-gradient-to-br from-emerald-50 to-teal-50">
                  <CardTitle className="text-3xl text-slate-900">Request Service</CardTitle>
                  <CardDescription className="text-lg text-slate-600">
                    Fill out the form below and we'll contact you within 2 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-700 font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="border-2 border-slate-200 focus:border-emerald-500 h-12 text-base"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700 font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="border-2 border-slate-200 focus:border-emerald-500 h-12 text-base"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+380 50 777 33 99"
                          className="border-2 border-slate-200 focus:border-emerald-500 h-12 text-base"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-slate-700 font-medium">Service Type *</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="flex h-12 w-full rounded-md border-2 border-slate-200 bg-white px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select a service</option>
                          <option value="Emergency Repairs">Emergency Repairs</option>
                          <option value="Bathroom Renovation">Bathroom Renovation</option>
                          <option value="Whole-Home Plumbing">Whole-Home Plumbing</option>
                          <option value="Water Heater Systems">Water Heater Systems</option>
                          <option value="Pipe & Drain Services">Pipe & Drain Services</option>
                          <option value="Smart Plumbing">Smart Plumbing</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 font-medium">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Describe your plumbing needs..."
                        rows={5}
                        className="border-2 border-slate-200 focus:border-emerald-500 text-base resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Join thousands of satisfied clients who trust AQUABLISS for their premium plumbing needs.
              Your satisfaction is guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+380507773399">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold text-lg shadow-xl">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +380 50 777 33 99
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/30 hover:border-emerald-500 text-white font-semibold text-lg">
                  Get Free Quote
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Droplets className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AQUABLISS</h3>
                  <p className="text-xs text-slate-400 font-medium tracking-wider">PREMIUM PLUMBING</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                Ukraine's premier plumbing service since 1998. Delivering excellence with Roman concrete reliability
                and aerospace precision. Your satisfaction is our legacy.
              </p>
              <div className="flex gap-4">
                <a href="tel:+380507773399" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Phone className="h-6 w-6" />
                </a>
                <a href="mailto:victordrux1@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Emergency Repairs</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Bathroom Renovation</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Water Heaters</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Smart Plumbing</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">Pipe & Drain</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-slate-400">Phone</div>
                    <a href="tel:+380507773399" className="text-white font-medium hover:text-emerald-400 transition-colors">
                      +380 50 777 33 99
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <a href="mailto:victordrux1@gmail.com" className="text-white font-medium hover:text-emerald-400 transition-colors">
                      victordrux1@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-slate-400">Service Area</div>
                    <div className="text-white font-medium">Kiev & Surrounding Regions</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-slate-800 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 AQUABLISS. All rights reserved. Engineered with excellence.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
