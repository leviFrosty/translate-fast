import UserReview from "../user-review";

export default function Reviews() {
  return (
    <section className="flex flex-col items-center">
      <UserReview
        message="I loved your product! It saved me so much time and effort. It's the best thing in the world blah blah blah."
        image="https://picsum.photos/100"
        name="Jonathan Doe"
        title="8,100 Followers on Twitter"
      />
    </section>
  );
}
