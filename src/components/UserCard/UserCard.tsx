import type { UserData } from "../../types";

import {
    Card,
    CardTitle,
    Details,
    DetailRow,
    DetailLabel,
    DetailValue,
} from "./styles";

type UserCardProps = {
    user: UserData;
};

function UserCard({ user }: UserCardProps) {
    return (
        <Card>
            <CardTitle>Пользователь</CardTitle>

            <Details>
                <DetailRow>
                    <DetailLabel>Name</DetailLabel>
                    <DetailValue>{user.name}</DetailValue>
                </DetailRow>

                <DetailRow>
                    <DetailLabel>Surname</DetailLabel>
                    <DetailValue>{user.surname}</DetailValue>
                </DetailRow>

                <DetailRow>
                    <DetailLabel>Age</DetailLabel>
                    <DetailValue>{user.age}</DetailValue>
                </DetailRow>

                {user.jobPosition.trim() !== "" && (
                    <DetailRow>
                        <DetailLabel>Job Position</DetailLabel>
                        <DetailValue>{user.jobPosition}</DetailValue>
                    </DetailRow>
                )}
            </Details>
        </Card>
    );
}

export default UserCard;