from rest_framework import serializers
from critboard.submissions.models import FileSubmissionData, LinkSubmissionData, SubmissionRequest


class SubmissionRequestSerializer(serializers.Serializer):
    id = serializers.UUIDField(required=False)
    private = serializers.BooleanField(write_only=True)
    submission_type = serializers.CharField(required=False)
    is_reviewed = serializers.BooleanField(required=False)
    created_at = serializers.DateTimeField(required=False)
    submission_content = serializers.SerializerMethodField(required=False)

    def get_submission_content(self, obj):
        if obj.submission_type == "file" and obj.object_id != None:
            file_submission = FileSubmissionData.objects.get(pk=obj.object_id)
            serializer = FileSubmissionSerializer(file_submission)
            return serializer.data
        elif obj.submission_type == "link" and obj.object_id != None:
            link_submission = LinkSubmissionData.objects.get(pk=obj.object_id)
            serializer = LinkSubmissionSerializer(link_submission)
            return serializer.data
        return None

    def create(self, validated_data):
        return SubmissionRequest.objects.create(
            **validated_data
        )


class FileSubmissionSerializer(serializers.Serializer):
    title = serializers.CharField()
    description = serializers.CharField()
    file = serializers.FileField()
    created_at = serializers.DateTimeField(required=False)
    request_id = serializers.UUIDField(required=False, write_only=True)
    
    def create(self, validated_data):
        file_submission = FileSubmissionData.objects.create(
            title = validated_data.get("title"),
            description = validated_data.get("description"),
            file = validated_data.get("file")
        )
        submission_request = SubmissionRequest.objects.get(pk=validated_data.get("request_id"))
        submission_request.content_object = file_submission
        submission_request.submission_type = "file"
        submission_request.save()
        return file_submission


class LinkSubmissionSerializer(serializers.Serializer):
    title = serializers.CharField()
    description = serializers.CharField()
    link = serializers.CharField()
    created_at = serializers.DateTimeField(required=False)
    request_id = serializers.UUIDField(required=False, write_only=True)

    def create(self, validated_data):
        link_submission = LinkSubmissionData.objects.create(
            title = validated_data.get("title"),
            description = validated_data.get("description"),
            link = validated_data.get("link")
        )
        submission_request = SubmissionRequest.objects.get(pk=validated_data.get("request_id"))    
        submission_request.content_object = link_submission
        submission_request.submission_type = "link"
        submission_request.save()
        return link_submission
