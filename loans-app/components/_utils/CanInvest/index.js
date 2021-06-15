const canInvest = (totalAvailable = 0, amount = "") => {
    try {
        const available = BigInt(totalAvailable)
        const amt = BigInt(amount.replace(",", ""))
        return available > 0n && available > amt
    } catch (e) {
        console.error(e)
        return false
    }
}

export default canInvest;