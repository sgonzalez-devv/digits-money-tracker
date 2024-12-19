import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Coin } from '@/types/coinType'
import React from 'react'

type Props = {
    walletName: string,
    walletNetwork: string,
    walletBalanceInUSD: number,
    walletCoins: Coin[]
}

export default function AppCryptoWallet({ ...Props }: Props) {
    return (
        <Card className='drop-shadow-md'>
            <CardHeader>
                <CardTitle>{Props.walletName}</CardTitle>
                <CardDescription>Wallet Network: {Props.walletNetwork}</CardDescription>
                <h1 className='text-xl font-bold'>Total Balance: ${Props.walletBalanceInUSD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
            </CardHeader>
            <CardContent>
                <h1>Coins in wallet:</h1>
                {Props.walletCoins.map((coin) => (
                    <div key={coin.coinSymbol} className='flex justify-between gap-7 my-2'>
                        <h1 className='text-md font-medium'>{coin.coinName} <span className='text-xs text-gray-600'>{coin.coinSymbol}</span></h1>
                        <h1>Price: {coin.coinPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                        <h3>Market Cap: {coin.marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}