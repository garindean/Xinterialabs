import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  title: string
  description: string
  comingSoon: boolean
  href?: string
  imageUrl: string
}

export default function ProductCard({ title, description, comingSoon, href, imageUrl }: ProductCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 sm:h-56 md:h-60">
        <Image
          src={title === "Xinteria Market Maker" ? "/images/xinteria-market-maker-hero.png" : imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <CardHeader className="pb-3 sm:pb-4">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-xl sm:text-2xl leading-tight">{title}</CardTitle>
          {comingSoon && (
            <Badge variant="outline" className="border-xinteria-blue text-xinteria-blue text-xs sm:text-sm shrink-0">
              Coming Soon
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex items-start pt-0 pb-4">
        <p className="text-muted-foreground text-sm sm:text-base min-h-[2.5rem] sm:min-h-[3rem]">
          {comingSoon ? "" : description}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          asChild
          className="w-full bg-gradient-to-r from-lime-500 to-teal-500 hover:from-lime-600 hover:to-teal-600 text-white text-sm sm:text-base h-10 sm:h-11"
        >
          <Link href={href || "#"}>
            Learn More <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
