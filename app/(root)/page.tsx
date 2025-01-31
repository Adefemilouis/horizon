"use client"

import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import RightSideBar from '@/components/ui/RightSideBar';


const page = () => {
  const loggedIn = { firstName: 'Adefemi', lastName: 'Adekunle', email: 'adefemilouis@gmail.com' };
  return (
    <>
       

       <section className="home">
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Acess and manage your accoumt and transactions efficiently. "
          />
           
            <TotalBalanceBox 
          accounts={[]}
           totalBanks={1}
           totalCurrentBalance={[{ currentBalance: 123.50 }, {
            currentBalance: 500.50
           }]}

           /> 

        </header>

        RECENT  TRANSACTIONS
      </div>

      <RightSideBar
      user={loggedIn}
      transactions={[]}
      banks={[{}, {}]}
      />
    </section>
    </>
    
  )
}

export default page
