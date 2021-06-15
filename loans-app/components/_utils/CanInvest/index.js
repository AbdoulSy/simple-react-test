const canInvest = (totalAvailable = 0, amount = "") => {
    try {
        const sanitizedAmount = typeof amount === "string" ? amount.replace(",", "") : amount
        const sanitizedTotal = typeof totalAvailable === "string" ? totalAvailable.replace(",", "") : totalAvailable
        const available = BigInt(sanitizedTotal)
        const amt = BigInt(sanitizedAmount)
        return available > 0n && available > amt
    } catch (e) {
        console.error(e)
        return false
    }
}

export default canInvest;