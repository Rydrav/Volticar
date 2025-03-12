import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Icon className="h-8 w-8 text-primary" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
