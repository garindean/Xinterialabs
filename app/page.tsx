import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <div className="mr-2 sm:mr-4 flex flex-1 sm:flex-initial justify-start sm:justify-start">
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
              <Image
                src="/images/xinteria-logo.png"
                alt="Xinteria Labs"
                width={120}
                height={32}
                className="h-6 sm:h-8 w-auto"
              />
              <span className="text-base sm:text-lg font-semibold text-xinteria-blue whitespace-nowrap">Labs</span>
            </Link>
          </div>
          <div className="ml-auto flex items-center space-x-2 sm:space-x-4 md:space-x-8 absolute right-4 sm:relative sm:right-auto">
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-3" asChild>
              <Link href="#products">Products</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-3" asChild>
              <Link href="#about">About</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-3 hidden sm:inline-flex" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-8 md:py-12 lg:py-24 xl:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                    Innovating the Future of Finance
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground text-base md:text-xl">
                    Xinteria Labs develops cutting-edge financial technology solutions that transform how markets
                    operate.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-xinteria-blue hover:bg-xinteria-blue-dark">
                    <Link href="#products">
                      Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0">
                <div className="relative h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-xinteria-blue to-xinteria-blue-dark rounded-full blur-3xl opacity-20"></div>
                  <div className="relative flex h-full w-full items-center justify-center rounded-full bg-muted/50 border">
                    <Image
                      src="/images/xinteria-icon.png"
                      alt="Xinteria"
                      width={200}
                      height={200}
                      className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-48 xl:w-48"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="products" className="w-full py-8 md:py-12 lg:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h2>
                <p className="max-w-[900px] text-muted-foreground text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our innovative financial technology solutions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:gap-12 lg:gap-20 py-8 md:py-12 md:grid-cols-2">
              <ProductCard
                title="Xintellia"
                description="Advanced AI-powered financial analytics platform"
                comingSoon={true}
                href="https://xintellia.com"
                imageUrl="/images/xintellia-hero.jpg"
              />
              <ProductCard
                title="Xinteria MM"
                description="Sophisticated market making solution for digital assets"
                comingSoon={false}
                href="/xinteria"
                imageUrl="/images/xinteria-market-maker-hero.png"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-8 md:py-12 lg:py-12 my-2">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-0 mt-[-5px]">
                  About Xinteria Labs
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed my-0 py-3.5 pt-8 md:pt-14">
                  At Xinteria Labs, we're dedicated to building the next generation of financial technology solutions.
                  Our team combines expertise in artificial intelligence, blockchain technology, and traditional finance
                  to create innovative products that address real-world challenges in the financial markets.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-8 md:py-12 lg:py-24 bg-muted/50 my-8 md:my-24 lg:my-36">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
                <p className="max-w-[900px] text-muted-foreground text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in learning more about our products or partnering with us? Get in touch.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-xinteria-blue hover:bg-xinteria-blue-dark" size="lg">
                  <Link href="mailto:hello@xinterialabs.io" className="flex items-center">
                    Contact Us <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Xinteria Labs. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-8">
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
