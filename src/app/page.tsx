import {MetricCards, type Metric} from "@/components/metric-cards";
import {Users, DollarSign, CreditCard, Activity} from "lucide-react";
import {UsersTable, type User} from "@/components/users-table";

const metrics: Metric[] = [
	{
		title: "Users",
		value: 5000,
		change: "+50 from last month",
		icon: <Users className="h-4 w-4 text-muted-foreground" />
	},
	{
		title: "Subscriptions",
		value: 3000,
		change: "+100 from last day",
		icon: <CreditCard className="h-4 w-4 text-muted-foreground" />
	},
	{
		title: "Revenue",
		value: "$100",
		change: "+200 from last year",
		icon: <DollarSign className="h-4 w-4 text-muted-foreground" />
	},
	{
		title: "Last month subscriptions",
		value: 30,
		change: "+10 from last weeks",
		icon: <Activity className="h-4 w-4 text-muted-foreground" />
	}
];

const users: User[] = [
	{
		id: 1,
		firstName: "ucup",
		lastName: "surucup",
		lastSignInAt: 170000,
		emailAddress: [
			{
				id: 401,
				emailAddress: "surucup12@gmail.com"
			}
		]
	},
	{
		id: 2,
		firstName: "jonny",
		lastName: "bansos",
		lastSignInAt: 170000,
		emailAddress: [
			{
				id: 411,
				emailAddress: "jonnysos@gmail.com"
			}
		]
	},
	{
		id: 3,
		firstName: "ujang",
		lastName: "surujang",
		lastSignInAt: 170000,
		emailAddress: [
			{
				id: 420,
				emailAddress: "surujang@mail.com"
			}
		]
	},
	{
		id: 4,
		firstName: "otong",
		lastName: "surotongs",
		lastSignInAt: 170000,
		emailAddress: [
			{
				id: 4110,
				emailAddress: "surotongs@gmail.com"
			}
		]
	},
];

export default function Home() {

  return (
    <main className="container p-4 space-y-4 mx-auto">
		  <h1 className="text-3xl font-bold mb-6">
			  Dashboard
			</h1>
			<MetricCards metrics={metrics} />
			
			<div >
			  <UsersTable users={users}/>
			</div>
		</main>
  );
};