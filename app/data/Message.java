package data;

public class Message {
    public String text;                //text entered by user
    public FeedResponse feedResponse;  //response to the user
    public Sender sender;	        //sender can be either BOT or user

    public enum Sender {
        BOT, USER
    }
}

