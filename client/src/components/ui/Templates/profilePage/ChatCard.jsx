import {
    Card,
    
    CardDescription,

    CardFooter,

    CardHeader,
    CardTitle,
  } from "../../card"


function ProfileCard() {
  return (
    <Card>
                  <CardHeader>
                    <CardTitle>name</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    days ago
                  </CardFooter>
                </Card>
  )
}

export default ProfileCard