import { Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
import RowData from "./RowData";


const Leaderboard = (props) => {
	const { users } = props;

	const sortedUserList = Object.values(users).sort(
		(u1, u2) =>
			u2.questions.length +
			Object.values(u2.answers).length -
			(u1.questions.length + Object.values(u1.answers).length)
	);

	return (
		<Container>
			<Table bordered hover className="mt-4">
				<thead>
					<tr>
						<th>User</th>
						<th>Answered</th>
						<th>Created</th>
					</tr>
				</thead>
				<tbody>
					{sortedUserList.map((user, index) => (
						<RowData
							key={`${index}${user.id}`}
							id={user.id}
							avatarUrl={user.avatarURL}
							name={user.name}
							questions={user.questions}
							answers={user.answers}
						/>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(Leaderboard);
