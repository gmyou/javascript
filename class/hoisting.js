try {
    let result = Member;
} catch (error) {
    console.log("호이스팅 불가");
};
class Member {
    static getMember() {
        return "member";
    }
};
try {
    let result = Member;
    console.log(result, "호이스팅 가능");
} catch (error) {
};