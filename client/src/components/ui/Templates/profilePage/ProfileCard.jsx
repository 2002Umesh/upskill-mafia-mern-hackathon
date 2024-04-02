import {
    Card,
    CardContent,
    CardDescription,

    CardHeader,
    CardTitle,
  } from "../../card"
  import { Input } from "../../input"
import { Label } from "../../label"

function ProfileCard() {
  return (
    <Card>
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue="Gamer Gear Pro Controller"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        
                      </div>
                    </div>
                  </CardContent>
                </Card>
  )
}

export default ProfileCard