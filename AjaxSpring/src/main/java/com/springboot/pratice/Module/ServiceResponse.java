package com.springboot.pratice.Module;

public class ServiceResponse<T> {
	
	private String status;
	private T data;
	public ServiceResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ServiceResponse(String status, T data) {
		super();
		this.status = status;
		this.data = data;
	}
	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}
	/**
	 * @return the data
	 */
	public T getData() {
		return data;
	}
	/**
	 * @param data the data to set
	 */
	public void setData(T data) {
		this.data = data;
	}
	@Override
	public String toString() {
		return "ServiceResponse [status=" + status + ", data=" + data + "]";
	}
	
	

}
