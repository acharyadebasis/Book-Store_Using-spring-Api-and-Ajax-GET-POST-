package com.springboot.pratice.Module;

public class Book {
	private String id;
	private String name;
	private String author;
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Book(String id, String name, String author) {
		super();
		this.id = id;
		this.name = name;
		this.author = author;
	}
	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @return the author
	 */
	public String getAuthor() {
		return author;
	}
	/**
	 * @param author the author to set
	 */
	public void setAuthor(String author) {
		this.author = author;
	}
	@Override
	public String toString() {
		return "Book [id=" + id + ", name=" + name + ", author=" + author + "]";
	}
	

}
