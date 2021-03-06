// @flow

export const GroupType = {
	User: "0",
	Admin: "1",
	Team: "2",
	Customer: "3",
	External: "4",
	Mail: "5",
	Contact: "6",
	File: "7"
}

export const PermissionType = {
	Public: "0",
	Symmetric: "1",
	Public_Symmetric: "2", // instances without ownerEncSessionKey (e.g. MailBody, FileData) after asymmetric decryption
	Unencrypted: "3",
	External: "5",
	Owner_List: "8"
}

export const BucketPermissionType = {
	Public: "2",
	External: "3"
}

export const MailFolderType = {
	CUSTOM: '0',
	INBOX: '1',
	SENT: '2',
	TRASH: '3',
	ARCHIVE: '4',
	SPAM: '5',
	DRAFT: '6'
}

export const ReplyType = {
	NONE: '0',
	REPLY: '1',
	FORWARD: '2',
	REPLY_FORWARD: '3'
}

export const ContactAddressType = {
	PRIVATE: '0',
	WORK: '1',
	OTHER: '2',
	CUSTOM: '3'
}

export const ContactPhoneNumberType = {
	PRIVATE: '0',
	WORK: '1',
	MOBILE: '2',
	FAX: '3',
	OTHER: '4',
	CUSTOM: '5'
}

export const ContactSocialType = {
	TWITTER: '0',
	FACEBOOK: '1',
	XING: '2',
	LINKED_IN: '3',
	OTHER: '4',
	CUSTOM: '5'
}

export const OperationType = {
	CREATE: '0',
	UPDATE: '1',
	DELETE: '2'
}

export const AccountType = {
	FREE: '1',
	STARTER: '2',
	PREMIUM: '3',
	EXTERNAL: '5'
}

export const ApprovalStatus = {
	RegistrationApproved: '0',
	RegistrationApprovalNeeded: '1',
	SendMailsApproved: '2',
	InvoiceNotPaid: '3'
}


export const BookingItemFeatureType = {
	Users: '0',
	Storage: '1',
	Alias: '2'
}


export const PaymentMethodType = {
	Invoice: '0',
	CreditCard: '1',
	Sepa: '2',
	Paypal: '3'
}


export const Const = {
	UPGRADE_REMINDER_INTERVAL: 14 * 24 * 60 * 60 * 1000,
	MEMORY_GB_FACTOR: 1000000000,
	MEMORY_WARNING_FACTOR: 0.9,
	COUNTER_USED_MEMORY_INTERNAL: "UsedMemoryInternalNew",
	COUNTER_USED_MEMORY_EXTERNAL: "UsedMemoryExternalNew",
	COUNTER_USED_MEMORY: "UsedMemoryNew",
	CURRENT_DATE: null, // Sets the current date for testing date dependent services. Only available in test environments.
	CURRENCY_SYMBOL_EUR: "€",

}

export const TUTANOTA_MAIL_ADDRESS_DOMAINS = ["tutanota.com", "tutanota.de", "tutamail.com", "tuta.io", "keemail.me"]

export const ConversationType = {
	NEW: '0',
	REPLY: '1',
	FORWARD: '2',
}

export const MailState = {
	DRAFT: '0',
	SENT: '1',
	RECEIVED: '2'
}

export const ApprovalState = {
	REGISTRATION_APPROVED: "0",
	REGISTRATION_APPROVAL_NEEDED: "1",
	SEND_MAILS_APPROVED: "2",
	INVOICE_NOT_PAID: "3",
}


export const InboxRuleType = {
	FROM_EQUALS: "0",
	RECIPIENT_TO_EQUALS: "1",
	RECIPIENT_CC_EQUALS: "2",
	RECIPIENT_BCC_EQUALS: "3",
	SUBJECT_CONTAINS: "4",
	MAIL_HEADER_CONTAINS: "5"
}

export const SpamRuleType = {
	WHITELIST: "1",
	BLACKLIST: "2",
	DISCARD: "3",
}

export const EmailSignatureType = {
	EMAIL_SIGNATURE_TYPE_DEFAULT: "0",
	EMAIL_SIGNATURE_TYPE_CUSTOM: "1",
	EMAIL_SIGNATURE_TYPE_NONE: "2",
}

export const CustomDomainStatusCode = {
	CUSTOM_DOMAIN_STATUS_OK: "0",
	CUSTOM_DOMAIN_STATUS_DNS_LOOKUP_FAILED: "1",
	CUSTOM_DOMAIN_STATUS_MISSING_MX_RECORD: "2",
	CUSTOM_DOMAIN_STATUS_MISSING_SPF_RECORD: "3",
	CUSTOM_DOMAIN_STATUS_INVALID_DNS_RECORD: "4",
	CUSTOM_DOMAIN_STATUS_DOMAIN_NOT_AVAILABLE: "5"
}

export const SessionState = {
	SESSION_STATE_ACTIVE: "0",
	SESSION_STATE_EXPIRED: "1",
	SESSION_STATE_DELETED: "2",
	SESSION_STATE_PENDING: "3",
}

export const PushServiceType = {
	ANDROID: "0",
	IOS: "1",
	EMAIL: "2"
}

export const InputFieldType = {
	TEXT: "0",
	NUMBER: "1",
	ENUM: "2"
}

export const EntropySrc = {
	mouse: "mouse",
	touch: "touch",
	key: "key",
	random: "random",
	static: "static",
	time: "time",
	accelerometer: "accel"
}

export const SecondFactorType = {
	u2f: "0",
	totp: "1"
}

export const MAX_ATTACHMENT_SIZE = 1024 * 1024 * 25

export const Feature = {
	Contacts: "contacts"
}
