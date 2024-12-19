"use client"

import Link from "next/link"

const AccountDetails = () => {
    return (
        <div>
            <Link href={"/accounts"}>Go back</Link>
            <br />
            account details
        </div>
    )
}
export default AccountDetails