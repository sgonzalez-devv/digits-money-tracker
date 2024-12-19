"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    crypto: z.string().min(2, {
        message: "Crypto must be at least 2 characters.",
    }),
    symbol: z.string().toUpperCase(),
    marketCap: z.string().min(2, {
        message: "MarketCap must be at least 2 characters.",
    }),
    price: z.number().int()
})

const AppAddCryptoDialog = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            crypto: "",
            symbol: "",
            marketCap: "",
            price: 0,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="crypto"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Crypto</FormLabel>
                            <FormControl>
                                <Input className="border-4" placeholder="Crypto Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="symbol"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Symbol</FormLabel>
                            <FormControl>
                                <Input className="border-4" placeholder="Symbol" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="marketCap"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Market Cap</FormLabel>
                            <FormControl>
                                <Input className="border-4" placeholder="Market Cap" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Current Price</FormLabel>
                            <FormControl>
                                <Input className="border-4" placeholder="Current Price" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="reset" variant="outline">Cancel</Button>
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default AppAddCryptoDialog;