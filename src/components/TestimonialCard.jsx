import { Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialCard({ name, position, testimonial }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-muted p-2">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="text-sm text-muted-foreground">{position}</p>
            </div>
          </div>
          <p className="text-muted-foreground">{testimonial}</p>
        </div>
      </CardContent>
    </Card>
  )
}
