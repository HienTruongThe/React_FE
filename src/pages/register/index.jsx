import { Button, Divider, Form, Input, message, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { callRegister } from "../../services/api";

const onFinishFailed = (errorInfo) => {
	console.log("Failed:", errorInfo);
};

const Register = () => {
	const navigate = useNavigate();
	const [isSubmit, setIsSubmit] = useState(false);

	const onFinish = async (values) => {
		const { fullName, email, password, phone } = values;
		setIsSubmit(true);
		const res = await callRegister(fullName, email, password, phone);
		setIsSubmit(false);
		console.log(res);
		if (res?.data?._id) {
			message.success("Đăng kí tài khoản thành công !");
			navigate("/login");
		} else {
			notification.error({
				message: "Đăng kí không thành công",

				description:
					res.message && res.message.length > 0
						? res.message[0]
						: res.message,
				duration: 5,
			});
		}
	};
	return (
		<div>
			<Form
				name="basic"
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				style={{
					maxWidth: 600,
					margin: "40px auto",
					padding: "30px",
					boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
					borderRadius: "10px",
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<h1 style={{ fontSize: "36px" }}>Đăng kí</h1>
				<Divider />
				<Form.Item
					labelCol={{ span: 24 }}
					label="Username"
					name="fullName"
					rules={[
						{
							required: true,
							message: "Please input your username!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					labelCol={{ span: 24 }}
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: "Please input your email!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					labelCol={{ span: 24 }}
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: "Please input your password!",
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					labelCol={{ span: 24 }}
					label="Phone"
					name="phone"
					rules={[
						{
							required: true,
							message: "Please input your phone!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit" loading={isSubmit}>
						Đăng kí
					</Button>
				</Form.Item>
				<Divider>Or</Divider>
				<p style={{ fontSize: "18px" }}>
					Bạn đã có tài khoản ? <Link to={"/login"}>Đăng nhập</Link>
				</p>
			</Form>
		</div>
	);
};
export default Register;
