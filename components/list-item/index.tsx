import { Card, CardContent, Typography } from "@mui/material";
import { formatRelative } from "date-fns";
import Link from "next/link";

type ListItemProps = {
  applicant: {
    id: string;
    company: string;
    status: string;
    createdAt: string;
  };
};

export const ListItem = ({ applicant }: ListItemProps) => {
  return (
    <Link href={`/applicant/${applicant.id}/edit`} key={applicant.id}>
      <li className="p-1">
        <Card variant="outlined">
          <CardContent>
            <div className="flex flex-row justify-between">
              <Typography>{applicant.company.toUpperCase()}</Typography>
              <Typography>{applicant.status}</Typography>
            </div>

            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              {formatRelative(new Date(applicant.createdAt), new Date())}
            </Typography>
          </CardContent>
        </Card>
      </li>
    </Link>
  );
};
