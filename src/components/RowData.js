import { Image } from "react-bootstrap";

const RowData = ({ id, avatarUrl, name, questions, answers }) => {
	return (
		<tr>
			<td>
				<div className="d-flex">
					<div>
						<Image src={avatarUrl} roundedCircle style={{ height: "4rem" }} />
					</div>
					<div>
						<p className="ms-2 fw-bold mb-1">{name}</p>
						<p className="ms-2 mb-1">{id}</p>
					</div>
				</div>
			</td>
			<td>{Object.values(answers).length}</td>
			<td>{questions?.length}</td>
		</tr>
	);
};

export default RowData;