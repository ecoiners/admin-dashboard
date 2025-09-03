import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody
} from "@/components/ui/table";

export default function UsersTable() {
	
	return (
		<Table>
		  <TableHeader>
			  <TableRow>
				  <TableHead>User</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Last Seen</TableHead>
				</TableRow>
			</TableHeader>
		</Table>
	);
};