function swim(animal) {
    if (typeof animal.swim === "function") {
        animal.swim();
    } else {
        console.log("This animal can't swim!");
    }
}

const duck = {
    swim: function () {
        console.log("The duck swims.");
    },
};

const frog = {
    swim: function () {
        console.log("The frog swims.");
    },
};

const dog = {
    run: function () {
        console.log("The dog runs.");
    },
};

swim(duck);  // Outputs: "The duck swims."
swim(frog);  // Outputs: "The frog swims."
swim(dog);   // Outputs: "This animal can't swim!"


class EmailUser {
    constructor(email) {
        this.email = email;
    }

    notify(message) {
        console.log(`Sending email to ${this.email} with message: ${message}`);
        // code to send email
    }
}

class SmsUser {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    notify(message) {
        console.log(`Sending SMS to ${this.phoneNumber} with message: ${message}`);
        // code to send SMS
    }
}

class PushUser {
    constructor(deviceId) {
        this.deviceId = deviceId;
    }

    notify(message) {
        // console.log(`Sending push notification to ${this.deviceId} with message: ${message}`);
        // code to send push notification
    }
}

class OtherUser {
    dance() {
        console.log("Dancing");
    }
}

// Usage
function sendNotification(user, message) {
    if (typeof user.notify !== "function") {
        console.log(`Unknown user type: ${user}`);
        return;
    }

    if ("deviceId" in user) {
        console.log(`Sending notification to ${user.deviceId} with message: ${message}`);
    } else if ("email" in user) {
        console.log(`Sending notification to ${user.email} with message: ${message}`);
    } else if ("phoneNumber" in user) {
        console.log(`Sending notification to ${user.phoneNumber} with message: ${message}`);
    }

    user.notify(message);
}

const emailUser = new EmailUser('test@example.com');
const smsUser = new SmsUser('123-456-7890');
const pushUser = new PushUser('device123');

sendNotification(emailUser, 'Hello Email User');
sendNotification(smsUser, 'Hello SMS User');
sendNotification(pushUser, 'Hello Push User');
sendNotification(new OtherUser, 'Hello Push User');

