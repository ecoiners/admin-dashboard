import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";

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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Last Seen</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              {user.firstName} {user.lastName}
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
