import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"

export default function TooltipCard(props) {
    const title = props.title
    const description = props.description
    const footer = props.footer
    
    return(
        <Card className="max-2-1/3">
             <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {props.children}
            </CardContent>
            <CardFooter>
                {footer}
            </CardFooter>
        </Card>
    )
}