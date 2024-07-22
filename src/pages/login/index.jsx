import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
const onFinish = (values) => {
	console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
	console.log("Failed:", errorInfo);
};
const LoginPage = () => {
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
					margin: "50px auto",
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
				<h1 style={{ fontSize: "36px" }}>Đăng nhập</h1>

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
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit" loading={false}>
						Đăng nhập
					</Button>
				</Form.Item>
				<h3 style={{ textAlign: "center", fontSize: "24px" }}>Or</h3>
				<p style={{ fontSize: "18px" }}>
					Bạn chưa có tài khoản ?{" "}
					<Link to={"/register"}>Đăng kí</Link>
				</p>
			</Form>
		</div>
	);
};

export default LoginPage;
