import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function XinteriaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/xinteria-gradient-logo.png"
                alt="Xinteria MM"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold text-gray-600">MM</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-8">
            <Button
              variant="outline"
              className="mb-8 bg-transparent border-xinteria-blue text-xinteria-blue hover:bg-xinteria-blue hover:text-white"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Xinteria Labs
              </Link>
            </Button>

            <div className="space-y-6">
              <div className="relative h-[200px] w-[200px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-green-500 to-teal-500 rounded-full blur-3xl opacity-20"></div>
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-muted/50 border">
                  <Image
                    src="/images/xinteria-icon.png"
                    alt="Xinteria MM"
                    width={100}
                    height={100}
                    className="h-20 w-20"
                  />
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">Xinteria MM</h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advanced market making solution for digital assets, providing liquidity and efficiency to markets
                through sophisticated algorithmic trading strategies.
              </p>

              <div className="pt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-lime-500 to-teal-500 hover:from-lime-600 hover:to-teal-600 text-white px-8"
                  asChild
                >
                  <Link href="https://xinteria.com" target="_blank" rel="noopener noreferrer">
                    Visit Xinteria.com <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
