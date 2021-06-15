export default function TotalAvailable({
    totalAvailable,
    symbol,
    label
}) {
    return <div className="flex flex-column w-4/6 mx-auto">
        <p role="heading">{label}</p>:
        <p role="contentinfo" className="font-bold">{symbol}{totalAvailable}</p>
    </div>
}