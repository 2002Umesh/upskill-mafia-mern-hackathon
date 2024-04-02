import { Button } from "../../button"
import {
    Card,
    CardContent,
    CardDescription,

    CardHeader,
    CardTitle,
  } from "../../card"

import { Label } from "../../label"
import { Textarea } from "@/components/ui/textarea"

function MessageCard() {
  return (
    <Card>
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <Label htmlFor="description">Description</Label>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                       
                      <Textarea placeholder="Type your message here." />
                      <Button>send</Button>
                      </div>
                      <div className="grid gap-3">
                        
                        
                      </div>
                    </div>
                  </CardContent>
                </Card>
  )
}

export default MessageCard