import React,{ useState} from 'react';
import {Link} from 'react-router-dom'
import { Redirect, useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';
import {SefiModal} from '../SefiModal';
import  "./header.scss";
import { getNativeBalance } from './utils';
import { BigNumber } from 'bignumber.js';
import { displayHumanizedBalance, humanizeBalance } from 'utils';
// Import Icons
const Header = () =>{
    const history = useHistory(); 
    const { user, tokens } = useStores();
    const isSwap = history.location.pathname === '/swap';
    const isPool = history.location.pathname === '/pool';
    const isSeFi = history.location.pathname === '/sefi';
    let address_formated;
    if(user.address){
        address_formated = (user?.address?.substring(0,7) +'...' + user?.address?.substring(user?.address?.length - 3,user?.address?.length));
    }else{
        address_formated = '';
    }
    const [balance,setBalance] = useState('0.0');
    const handleSignIn = async()=>{
        if(user.isKeplrWallet){
            user.signIn();
        }
    }
    async function getBalanceSRCT() {
        const balanceSCRT  = await getNativeBalance(user.address, user.secretjsSend); 
        const _balance = displayHumanizedBalance(
            humanizeBalance(new BigNumber(balanceSCRT as BigNumber), 6),
            BigNumber.ROUND_DOWN,
        ) 
        return _balance;
    };
    function displayBalanceSRCT(){
        getBalanceSRCT().then((res)=>{
            setBalance(res)
        })
    }
    displayBalanceSRCT();
    return(
        <>
            <nav className="menu"> 
                <div className="menu-left">
                    <img src='/static/secret-swap.svg' alt="brand logo"/>

                    <ul className='nav_menu__items'>
                        <li className={(isSwap) ? 'active':''}><Link  to={"/swap"}>Swap</Link></li>
                        <li><span>|</span></li>
                        <li  className={(isPool)  ? 'active':''}><Link  to={"/pool"}>Pool</Link></li>
                        <li><span>|</span></li>
                        <li  className={(isSeFi) ? 'active':''}><Link  to="/sefi">Earn</Link></li>
                        {/* <li><span>|</span></li> */}
                        {/* <li><Link  to="/">Governance</Link></li>  */}
                    </ul>
                </div>
                
                <div className="menu-right">
                     
                    <SefiModal 
                        trigger={
                            <button className="btn-secondary">
                                <a>SEFI</a>
                            </button>
                        }
                        tokens={tokens}
                        user={user}
                    />
                    <div className="btn-main">
                        <div className="wallet-icon">
                            <img src="/static/wallet-icon.svg" alt="wallet icon"/>
                        </div>
                        <p>{address_formated}</p>
                        <span>|</span>
                        <div>
                            <p className="balance">{balance}</p>
                            <p>SCRT</p>
                        </div>
                    </div>
                <div className="kpl_images__container">
                    <img onClick={handleSignIn} src='/static/keplricon.svg' alt="Key Icon"/>
                </div>
                </div>

            </nav>


        </>
    )

}

export default Header;