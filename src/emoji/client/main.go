package main

import (
	"log"

	"github.com/chriswilliams1977/grpc-web/src/emoji/pb"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
)

func main() {
	// connect to the server
	conn, err := grpc.Dial("localhost:9000", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("could not connect to the service: %v", err)
	}
	defer conn.Close()

	// send a request to the server
	//ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	//defer cancel()

	//connection
	c := emojipb.NewEmojiServiceClient(conn)

	doUnary(c)

}

func doUnary(c emojipb.EmojiServiceClient) {
	resp, err := c.Emojize(context.Background(), &emojipb.EmojizeRequest{
		Text: "I like :pizza: and :sushi:!",
	})
	if err != nil {
		log.Fatalf("could not call service: %v", err)
	}
	log.Printf("server says: %s", resp.GetEmojizedText())
}
