'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Banknote, Factory, HeartPulse, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const industries = [
  {
    icon: Banknote,
    title: "Fintech",
    description: "Build secure, scalable platforms for banking, payments, lending, and wealth management.",
    href: "/industries/fintech",
    features: [
      "Digital Banking",
      "Blockchain Integration",
      "RegTech & Compliance",
      "Financial Analytics",
    ],
    color: "from-primary to-primary/80",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Enhance productivity with automation, IoT, predictive maintenance, and ERP integrations.",
    href: "/industries/manufacturing",
    features: [
      "Smart Factories",
      "Industrial IoT",
      "Supply Chain Analytics",
      "Digital Twins",
    ],
    color: "from-secondary to-secondary/80",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Deliver connected care solutions that improve patient outcomes and provider efficiency.",
    href: "/industries/healthcare",
    features: [
      "EHR Integration",
      "Telemedicine",
      "Remote Patient Monitoring",
      "HIPAA Compliance",
    ],
    color: "from-primary to-primary/80",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Launch and scale digital commerce platforms with optimized UX and AI-powered personalization.",
    href: "/industries/ecommerce",
    features: [
      "Headless Commerce",
      "Recommendation Engines",
      "Inventory Automation",
      "Omnichannel Strategies",
    ],
    color: "from-secondary to-secondary/80",
  },
]

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-32 overflow-hidden bg-white text-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bgmainhero.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
            We empower organizations across industries to embrace innovation, drive transformation, and deliver value at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#0A6373] hover:bg-[#E66C6C] text-white shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/contact">
                Talk to an Industry Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute -bottom-px left-0 w-full z-0">
          <svg
            viewBox="0 0 1440 325"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-[100px] lg:h-[100px]"
          >
            <path
              d="M810.109 190.723V324.906H1439.97V141.635C1399.11 107.824 1358.5 72.4044 1316.96 48.4386C1146.99 -48.5261 971.704 0.680438 810.109 190.723Z"
              fill="#0A6373"
            />
            <path
              d="M654.316 239.05C706.182 255.407 756.402 284.718 808.124 302.496C881.8 327.838 958.526 329.369 1032.09 303.091C1103.57 277.612 1177.69 215.47 1248.33 183.899C1310.97 155.889 1379.36 144.355 1440 179.351V324.595H366.918V283.141C458.546 224.252 557.938 209.003 654.316 239.052V239.05Z"
              fill="#E66C6C"
            />
            <path
              d="M0 185.047L29.9989 177.248C59.9979 169.739 119.996 153.704 179.994 165.586C239.991 177.029 299.989 216.391 359.987 239.498C419.985 263.043 479.983 270.332 539.981 262.824C599.979 255.025 659.976 231.699 719.974 212.237C779.972 193.066 839.97 177.03 899.968 188.911C959.966 200.355 1019.96 239.717 1079.96 251.162C1139.96 263.043 1199.96 247.007 1259.95 251.162C1319.95 255.028 1379.95 278.35 1409.95 290.013L1439.97 301.858L1439.95 325H0V185.047Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Tailored Solutions by Industry</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover how we help companies lead the way in their sector through purpose-built digital capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map(({ icon: Icon, title, description, features, href, color }) => (
              <Card
                key={title}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${color}`} />
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate mb-3 group-hover:text-primary transition-colors">
                        {title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">{description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate mb-3">Focus Areas:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={href}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:translate-x-2 transition-all duration-300"
                  >
                    Explore Industry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us in Your Industry</h2>
            <p className="text-xl mb-8 text-white/90">
              Let’s co-create digital solutions that move your industry forward. Book a consultation today.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/consultation">
                Book Industry Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
