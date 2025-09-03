import {MetricCards, type Metric} from "@/components/metric-cards";
import {Users, DollarSign, CreditCard, Activity} from "lucide-react";
import UsersTable from "@/components/users-table";

const metrics: Metric[] = [
	{
		titlr: "Users",
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

export default function Home() {

  return (
    <main className="container p-4 space-y-4 mx-auto">
		  <h1 className="text-3xl font-bold mb-6">
			  Dashboard
			</h1>
			<MetricCards metrics={metrics} />
			
			<div >
			  <UsersTable />
			</div>
		</main>
  );
};