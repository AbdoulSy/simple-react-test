export default function TotalAvailable({
    totalAvailable,
    label
}) {
    return <div>
        <p role="heading">{label}</p>:
        <p role="contentinfo">{totalAvailable}</p>
    </div>
}