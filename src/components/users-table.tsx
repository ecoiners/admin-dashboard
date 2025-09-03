import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";

import {
	Avatar,
	AvatarImage,
	AvatarFallback
} from "@/components/ui/avatar";

// Define proper types without using 'any'
export type EmailAddress = {
  id: number;
  emailAddress: string;
};

export type User = {
  id: number;
  firstName?: string;
  lastName?: string;
  lastSignInAt: number;
  emailAddress: EmailAddress[];
};

export function UsersTable({ data }: { data: User[] }) {
  return (
    <Table className="bg-gray-600/40 rounded-md">
      <TableHeader className="bg-gray-700/40 border-none">
        <TableRow className="border-gray-500 uppercase">
          <TableHead>USER</TableHead>
          <TableHead>EMAIL</TableHead>
          <TableHead>LAST SEEN</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody >
        {data.map((user) => (
          <TableRow key={user.id} className="border-gray-700">
            <TableCell>
              <div className="flex items-center gap-3">
							  <Avatar className="h-9 w-9">
									<AvatarImage src="/users.png" alt={`${user.firstName}-${user.lastName}`}>
								  </AvatarImage>
								  
								  <AvatarFallback>
										{
										  user.firstName ? user.firstName : "users"
									  }
								  </AvatarFallback>
							  </Avatar>
							</div>
            </TableCell>
            <TableCell>
              {user.emailAddress[0]?.emailAddress || 'No email'}
            </TableCell>
            <TableCell>
              {user.lastSignInAt 
                ? new Date(user.lastSignInAt).toLocaleString() 
                : 'Never'
              }
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
