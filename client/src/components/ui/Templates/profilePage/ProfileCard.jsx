import {
    Card,
    CardContent,
    CardDescription,

    CardHeader,
    CardTitle,
  } from "../../card"
  import { Input } from "../../input"
import { Label } from "../../label"

function ProfileCard({name,email}) {
  return (
    <Card>
                  <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>
                      {email}
                    </CardDescription>
                  </CardHeader>
                  
                </Card>
  )
}

export default ProfileCard