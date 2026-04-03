import { relations } from "drizzle-orm/relations";
import { users, wrapped, posts, bios, block, comments, follows, likes, mute, notifications, pollVote, sessions, verificationCodes, commentImages, images, userRelationship, postImages } from "./schema";

export const wrappedRelations = relations(wrapped, ({one}) => ({
	user: one(users, {
		fields: [wrapped.userId],
		references: [users.userId]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	wrappeds: many(wrapped),
	posts: many(posts),
	bios: many(bios),
	blocks_targetUserId: many(block, {
		relationName: "block_targetUserId_users_userId"
	}),
	blocks_userId: many(block, {
		relationName: "block_userId_users_userId"
	}),
	comments: many(comments),
	follows_followerId: many(follows, {
		relationName: "follows_followerId_users_userId"
	}),
	follows_followingId: many(follows, {
		relationName: "follows_followingId_users_userId"
	}),
	likes: many(likes),
	mutes_targetUserId: many(mute, {
		relationName: "mute_targetUserId_users_userId"
	}),
	mutes_userId: many(mute, {
		relationName: "mute_userId_users_userId"
	}),
	notifications_targetUserId: many(notifications, {
		relationName: "notifications_targetUserId_users_userId"
	}),
	notifications_userId: many(notifications, {
		relationName: "notifications_userId_users_userId"
	}),
	pollVotes: many(pollVote),
	sessions: many(sessions),
	verificationCodes: many(verificationCodes),
	userRelationships_targetUserId: many(userRelationship, {
		relationName: "userRelationship_targetUserId_users_userId"
	}),
	userRelationships_userId: many(userRelationship, {
		relationName: "userRelationship_userId_users_userId"
	}),
}));

export const postsRelations = relations(posts, ({one, many}) => ({
	user: one(users, {
		fields: [posts.userId],
		references: [users.userId]
	}),
	comments: many(comments),
	likes: many(likes),
	notifications: many(notifications),
	pollVotes: many(pollVote),
	postImages: many(postImages),
}));

export const biosRelations = relations(bios, ({one}) => ({
	user: one(users, {
		fields: [bios.userId],
		references: [users.userId]
	}),
}));

export const blockRelations = relations(block, ({one}) => ({
	user_targetUserId: one(users, {
		fields: [block.targetUserId],
		references: [users.userId],
		relationName: "block_targetUserId_users_userId"
	}),
	user_userId: one(users, {
		fields: [block.userId],
		references: [users.userId],
		relationName: "block_userId_users_userId"
	}),
}));

export const commentsRelations = relations(comments, ({one, many}) => ({
	post: one(posts, {
		fields: [comments.postId],
		references: [posts.postId]
	}),
	user: one(users, {
		fields: [comments.userId],
		references: [users.userId]
	}),
	likes: many(likes),
	notifications: many(notifications),
	commentImages: many(commentImages),
}));

export const followsRelations = relations(follows, ({one}) => ({
	user_followerId: one(users, {
		fields: [follows.followerId],
		references: [users.userId],
		relationName: "follows_followerId_users_userId"
	}),
	user_followingId: one(users, {
		fields: [follows.followingId],
		references: [users.userId],
		relationName: "follows_followingId_users_userId"
	}),
}));

export const likesRelations = relations(likes, ({one}) => ({
	comment: one(comments, {
		fields: [likes.commentId],
		references: [comments.commentId]
	}),
	post: one(posts, {
		fields: [likes.postId],
		references: [posts.postId]
	}),
	user: one(users, {
		fields: [likes.userId],
		references: [users.userId]
	}),
}));

export const muteRelations = relations(mute, ({one}) => ({
	user_targetUserId: one(users, {
		fields: [mute.targetUserId],
		references: [users.userId],
		relationName: "mute_targetUserId_users_userId"
	}),
	user_userId: one(users, {
		fields: [mute.userId],
		references: [users.userId],
		relationName: "mute_userId_users_userId"
	}),
}));

export const notificationsRelations = relations(notifications, ({one}) => ({
	comment: one(comments, {
		fields: [notifications.commentId],
		references: [comments.commentId]
	}),
	post: one(posts, {
		fields: [notifications.postId],
		references: [posts.postId]
	}),
	user_targetUserId: one(users, {
		fields: [notifications.targetUserId],
		references: [users.userId],
		relationName: "notifications_targetUserId_users_userId"
	}),
	user_userId: one(users, {
		fields: [notifications.userId],
		references: [users.userId],
		relationName: "notifications_userId_users_userId"
	}),
}));

export const pollVoteRelations = relations(pollVote, ({one}) => ({
	post: one(posts, {
		fields: [pollVote.postId],
		references: [posts.postId]
	}),
	user: one(users, {
		fields: [pollVote.userId],
		references: [users.userId]
	}),
}));

export const sessionsRelations = relations(sessions, ({one}) => ({
	user: one(users, {
		fields: [sessions.userId],
		references: [users.userId]
	}),
}));

export const verificationCodesRelations = relations(verificationCodes, ({one}) => ({
	user: one(users, {
		fields: [verificationCodes.userId],
		references: [users.userId]
	}),
}));

export const commentImagesRelations = relations(commentImages, ({one}) => ({
	comment: one(comments, {
		fields: [commentImages.commentId],
		references: [comments.commentId]
	}),
	image: one(images, {
		fields: [commentImages.imageId],
		references: [images.imageId]
	}),
}));

export const imagesRelations = relations(images, ({many}) => ({
	commentImages: many(commentImages),
	postImages: many(postImages),
}));

export const userRelationshipRelations = relations(userRelationship, ({one}) => ({
	user_targetUserId: one(users, {
		fields: [userRelationship.targetUserId],
		references: [users.userId],
		relationName: "userRelationship_targetUserId_users_userId"
	}),
	user_userId: one(users, {
		fields: [userRelationship.userId],
		references: [users.userId],
		relationName: "userRelationship_userId_users_userId"
	}),
}));

export const postImagesRelations = relations(postImages, ({one}) => ({
	image: one(images, {
		fields: [postImages.imageId],
		references: [images.imageId]
	}),
	post: one(posts, {
		fields: [postImages.postId],
		references: [posts.postId]
	}),
}));