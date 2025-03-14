import { Facebook, Apple } from "lucide-react"
import { FcGoogle } from "react-icons/fc"
import { Button } from "@/components/ui/button"

export function SocialLoginButtons() {
  return (
    <div className="flex justify-center gap-3">
      <Button variant="outline" className="flex items-center justify-center flex-1 py-2">
        <FcGoogle className="mr-2 h-5 w-5" />
        Google
      </Button>
      <Button variant="outline" className="flex items-center justify-center flex-1 py-2">
        <Facebook className="mr-2 h-5 w-5 text-blue-600" />
        Facebook
      </Button>
      <Button variant="outline" className="flex items-center justify-center flex-1 py-2">
        <Apple className="mr-2 h-5 w-5" />
        Apple
      </Button>
    </div>
  )
}