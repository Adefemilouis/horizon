import { formatAmount } from "@/lib/utils"
import CountUp from "react-countup"
import AnimatedCounter from "./ui/AnimatedCounter"
import DoughnutCharts from "./ui/DoughnutCharts"

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance}: TotalBalanceBoxProps) => {
  return (
  <section className="total-balance">
    <div className="total-balance-chart">
        <DoughnutCharts accounts={accounts}  />

    </div>
    <div className="flex flex-col gap-6 ">
        <h2 className="header-2">
            Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
            <p className="total-balance-label">
                Total Current Balance
            </p>

            <div className="total-balance-amount flex-center gap-2">
                <CountUp end={100} />

                <AnimatedCounter amount= {totalCurrentBalance} />


                 {formatAmount (totalCurrentBalance)}
            </div>
        </div>
    </div>
  </section>
  )
}

export default TotalBalanceBox
