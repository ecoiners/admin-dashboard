import Link from "next/link";
import {Card, CardContent} from "@/components/ui/card";

export type Link = {
	href: string;
	text: string;
};

const links: Link[] = [
	{
		href: "/support",
		text: "Bagaimana Pengguna Dapat Menghubungi Tim Dukungan."
	},
	{
		href: "/faq",
		text: "Pertanyaan yang sering diajukan tentang dasboard."
	},
	{
		href: "/pricing",
		text: "Bagaimana cara menghost aplikasi?"
	},
	{
		href: "/features",
		text: "3 cara Anda dapat membagikan hasil"
	},
	{
		href: "/about",
		text: "Cara mengintegrasikan AI untuk menganalisys umpan balik."
	},
	{
		href: "/contact",
		text: "Contact US"
	},
	{
		href: "/term",
		text: "Term and Conditions"
	},
	{
		href: "/privacy",
		text: "Privacy Policy"
	}
];

export function QuickLinks() {
	
	return (
		<Card className="bg-gray-500/40 border-none rounded-md overflow-hidden">
		  <CardContent className="p-6 h-full flex flex-col">
			  <h2 className="text-pink-500 text-lg font-bold mb-2">Quick Link</h2>
			  <ul>
				  {
						links.map((link, index) => (
							<li key={index} className="mb-2 hover:text-pink-600">
							  <Link href={link.href}>
								  {link.text}
								</Link>
							</li>
						))
					}
				</ul>
			</CardContent>
		</Card>
	);
};