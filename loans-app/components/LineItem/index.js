import {Button} from "../Button"

export default function LineItem ({ item }) {
    return <li>
        <div>
            <h6>
                {item.title}
            </h6>
        </div>
        <div>
            {item.userInvested && <p>Invested</p>}
            <Button label="INVEST" />
        </div>
    </li>
}