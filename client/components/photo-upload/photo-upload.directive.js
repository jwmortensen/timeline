/*'use strict';

angular.module('timelineApp').
  directive('photoUpload', ['$parse', 'photoUploader', function ($parse, photoUploader) {
    return {
      restrict: 'AC',
      require: '?ngModel',
      replace: true,
      transclude: false,
      scope: true,
      controller: ['$scope', '$element', '$attrs', '$transclude', function ($scope, $element, $attrs, $transclude) {
        $scope.attempt = false;
        $scope.success = false;
        $scope.uploading = false;

        $scope.barClass = function () {
          return {
            "bar-success": $scope.attempt && !$scope.uploading && $scope.success
          };
        };
      }],
      compile: function (element, attr, linker) {
        return {
          pre: function ($scope, $element, $attr) {
            if (angular.isUndefined($attr.bucket)) {
              throw Error('bucket is a mandatory attribute');
            }
          },
          post: function (scope, element, attrs, ngModel) {
            // Build the opts array
            var opts = angular.extend({}, scope.$eval(attrs.s3UploadOptions || attrs.options));
            opts = angular.extend({
              submitOnChange: true,
              getOptionsUri: '/getS3Options',
              acl: 'public-read',
              uploadingKey: 'uploading',
              folder: '',
              enableValidation: true
            }, opts);
            var bucket = scope.$eval(attrs.bucket);

            // Bind the button click event
            var button = angular.element(element.children()[0]),
              file = angular.element(element.find("input")[0]);
            button.bind('click', function (e) {
              file[0].click();
            });

            // Update the scope with the view value
            ngModel.$render = function () {
              scope.filename = ngModel.$viewValue;
            };

            var uploadFile = function () {
              var selectedFile = file[0].files[0];
              var filename = selectedFile.name;
              var ext = filename.split('.').pop();

              scope.$apply(function () {
                S3Uploader.getUploadOptions(opts.getOptionsUri).then(function (s3Options) {
                  if (opts.enableValidation) {
                    ngModel.$setValidity('uploading', false);
                  }

                  var s3Uri = 'https://' + bucket + '.s3.amazonaws.com/';
                  var key = opts.folder + (new Date()).getTime() + '-' + S3Uploader.randomString(16) + "." + ext;
                  S3Uploader.upload(scope,
                      s3Uri,
                      key,
                      opts.acl,
                      selectedFile.type,
                      s3Options.key,
                      s3Options.policy,
                      s3Options.signature,
                      selectedFile
                    ).then(function () {
                      ngModel.$setViewValue(s3Uri + key);
                      scope.filename = ngModel.$viewValue;

                      if (opts.enableValidation) {
                        ngModel.$setValidity('uploading', true);
                        ngModel.$setValidity('succeeded', true);
                      }
                    }, function () {
                      scope.filename = ngModel.$viewValue;

                      if (opts.enableValidation) {
                        ngModel.$setValidity('uploading', true);
                        ngModel.$setValidity('succeeded', false);
                      }
                    });

                }, function (error) {
                  throw Error("Can't receive the needed options for S3 " + error);
                });
              });
            };

            element.bind('change', function (nVal) {
              if (opts.submitOnChange) {
                uploadFile();
              }
            });
          }
        };
      },
      templateUrl: 'components/photo-upload/photo-upload.html'
    };
  }]);*/