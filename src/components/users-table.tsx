import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell
} from "@/components/ui/table";

type User = {
	id: number,
	firtsName?: string,
	lastName?: string,
	lastSignInAt: number,
	emailAddress: {id: number, emailAddress: string}[],
	[key: string]: any
};

export default function UsersTable({data} : {data: User[]}) {
	
	return (
		<Table>
		  <TableHeader>
			  <TableRow>
				  <TableHead>User</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Last Seen</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
			  {
					data.map((user) => (
						<TableRow key={user.id}>
						  <TableCell>{user.firtsName} {user.lastName}</TableCell>
							<TableCell>{user.emailAddress[0].emailAddress}</TableCell>
							<TableCell>{new Date(user.lastSignInAt).toLocaleString()}</TableCell>
						</TableRow>
					))
				}
			</TableBody>
		</Table>
	);
};