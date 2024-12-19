import { Coin } from "@/types/coinType";
import AppCryptoWallet from "./_components/app-crypto-wallet";

const walletCoins = [
    { coinName: "Bitcoin", coinSymbol: "BTC", coinPrice: 100000, marketCap: 2000000000 },
    { coinName: "Ripple", coinSymbol: "XRP", coinPrice: 2.56, marketCap: 100000000 }
]


export default function CryptoWallets() {
    return (
        <div className="flex flex-wrap">
            <AppCryptoWallet walletName={"BaseWallet"} walletNetwork={"Binance Wallet"} walletBalanceInUSD={11500} walletCoins={walletCoins} />
        </div>
    )
}