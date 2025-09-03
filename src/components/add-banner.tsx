import Link from "next/link";
import {
	Card,
	CardContent
} from '@/components/ui/card';

export function AddBanner() {
	
	return (
		<Card className="h-[200px] overflow-hidden bg-gray-600/40 border-none rounded-md">
		  <Link href="/" className="block h-full">
			  <CardContent className="p-0 h-full flex flex-row items-center">
				  <div></div>
					<div className="p-4 w-1/2">
					  <CardTitle>Download Our App!</CardTitle>
						<CardDescription>
						  Dapatkan analytic anda ke mana pun anda pergi.💝
						</CardDescription>
					</div>
				</CardContent>
			</Link>
		</Card>
	);
};