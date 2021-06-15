import {Button} from "../Button"

export default function LineItem ({ item }) {
    return <li>
        <div>
            <h6>
                {item.title}
            </h6>
        </div>
        <Button label="INVEST" />
    </li>
}