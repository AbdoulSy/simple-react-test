import Data from "./current-loans.json"

export default (req, res) => {
  res.status(200).json(Data)
}
